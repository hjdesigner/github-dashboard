
/* eslint indent: [2, "tab"] */
/* eslint	no-tabs: 0 */

function createMarkup(star) {
	return star.map(starRepo => `
		<li class="hot__desktop-4">
			<div class="repos-per-star-item">
				<h3>${starRepo.name}</h3>
				<p>${starRepo.description}</p>
				<i><svg class="icon-account_balance"><use xlink:href="#icon-read-more" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>
			</div>
		</li>`).join('');
}

export default function reposSearchStar(data, element) {
	const elementHTML = element;
	const maxStar = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
	const markup = createMarkup(maxStar.slice(0, 10));
	elementHTML.innerHTML = markup;
	return data;
}

