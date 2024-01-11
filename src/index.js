const customersData = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
];

const template = ({
  name,
  company,
  phone,
  email,
  country,
  status,
}) => `<li class="customer">
  <div class="customer__name customer__item">${name}</div>
  <div class="customer__company customer__item">${company}</div>
  <div class="customer__phone customer__item">${phone}</div>
  <div class="customer__email customer__item">${email}</div>
  <div class="customer__country customer__item">${country}</div>
  <div class="customer__status customer__item">
    <div class="customer__status-label ${status}">${status}</div>
  </div>
</li>`;

const customersList = data => {
  return data.map(template).join('');
};

const table = document.getElementById('table');
table.innerHTML = customersList(customersData);

const navigation = document.getElementById('navigation');
const btn = document.getElementById('nav-icon4');
btn.addEventListener('click', () => {
  btn.toggleAttribute('open');
  navigation.toggleAttribute('open');
});
