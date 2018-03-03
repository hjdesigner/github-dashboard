
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */

function createMarkup(data) {
	return data.slice(0, 10).map(dataRepo => `
		<li class="hot__desktop-4">
			<a href="${dataRepo.repository_url}">
				<div class="repos-per-contributions-item">
					<h3>${dataRepo.repository_url.replace('https://api.github.com/repos/', '')}</h3>
					<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
				</div>
			</a>
		</li>`).join('');
}

export default function reposSearchContributions(data, element) {
	const elementHTML = element;
	const markup = createMarkup(data);
	elementHTML.innerHTML = markup;
}

