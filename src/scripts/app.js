import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

vi.mock('./api', () => ({
  getApiReposCommit: vi.fn(),
}));

type ApiModule = typeof import('./api');
type RepositoryCommitsModule = typeof import('./repository-commits');

describe('getRepositoryCommits', () => {
  let getApiReposCommitMock: ReturnType<typeof vi.mocked<ApiModule['getApiReposCommit']>>;
  let getRepositoryCommits: RepositoryCommitsModule['getRepositoryCommits'];

  beforeEach(async () => {
    vi.resetModules();
    vi.resetAllMocks();

    // Carrega os dois módulos da mesma instância do registro de módulos.
    const apiModule = await import('./api');
    const repositoryModule = await import('./repository-commits');

    getApiReposCommitMock = vi.mocked(apiModule.getApiReposCommit);
    getRepositoryCommits = repositoryModule.getRepositoryCommits;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('deve chamar a API com os parâmetros esperados', async () => {
    const expected = [
      {
        sha: 'abc123',
        message: 'Commit de teste',
      },
    ];

    getApiReposCommitMock.mockResolvedValue(expected);

    const result = await getRepositoryCommits('usuario', 'repositorio');

    expect(getApiReposCommitMock).toHaveBeenCalledTimes(1);
    expect(getApiReposCommitMock).toHaveBeenCalledWith(
      'usuario',
      'repositorio',
    );
    expect(result).toEqual(expected);
  });

  it('deve propagar erros retornados pela API', async () => {
    const error = new Error('Falha ao consultar a API');

    getApiReposCommitMock.mockRejectedValue(error);

    await expect(
      getRepositoryCommits('usuario', 'repositorio'),
    ).rejects.toThrow('Falha ao consultar a API');
  });

  it('deve retornar uma lista vazia quando a API retornar uma lista vazia', async () => {
    getApiReposCommitMock.mockResolvedValue([]);

    const result = await getRepositoryCommits('usuario', 'repositorio');

    expect(result).toEqual([]);
  });
});