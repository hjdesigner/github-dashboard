
function getFullYear(date) {
	const currentDate = new Date();
	const oldDate = new Date(date);
	const current = currentDate.getFullYear();
	const old = oldDate.getFullYear();
	return current - old;
}
export default function renderProfile(data, element) {
	const elementHTML = element;
	const emailItem = data.email !== null ? `<li><i><svg class="icon-mail"><use xlink:href="#icon-mail" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>${data.email}</li>` : '';
	const companyItem = data.company !== null ? `<li><i><svg class="icon-account_balance"><use xlink:href="#icon-account_balance" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>${data.company}</li>` : '';
	const markup = `
		<div class="hot__mobile-12 hot__tablet-12 hot__desktop-5">
			<img src="${data.avatar_url}" alt="${data.name}">
		</div>
		<div class="hot__mobile-12 hot__tablet-12 hot__desktop-7">
			<ul>
				<li><i><svg class="icon-person"><use xlink:href="#icon-person" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>${data.login}</li>
				<li><i><svg class="icon-files-empty"><use xlink:href="#icon-files-empty" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>${data.public_repos} repositórios</li>
				<li><i><svg class="icon-clock"><use xlink:href="#icon-clock" xmlns:xlink="http://www.w3.org/1999/xlink"></use></svg></i>No Github há ${getFullYear(data.created_at)} anos</li>
				${emailItem}
				${companyItem}
			</ul>
		</div>
	`;
	elementHTML.innerHTML = markup;
	return data;
}

