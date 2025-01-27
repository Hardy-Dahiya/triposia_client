import { getPhone } from '@/services/phone/PhoneServices';
export default async function Phone() {
  const phone = await fetchPhone();
  return (
    <div id="popup" className="popup content">
      <p className="title is-4">
        <a
          href={`tel:+${phone.phone}`}
          className="button is-danger has-text-weight-bold is-large call-popup"
        >
          <img height={62} width={62} src="../images/phone.gif" alt="call" /> &nbsp;{' '}
          <span className="hello">Speak with Expert*</span>{' '}
          <span className="hellos">+{phone.phone}</span>
        </a>
      </p>
    </div>
  );
}

async function fetchPhone() {
  try {
    const response = await getPhone();
    if (response?.data.status) {
      return response.data.data;
    }
    return { phone: '' }; // Default value if data is missing
  } catch (error) {
    console.log(error);
    return { phone: '' }; // Default value if data is missing
  }
}
