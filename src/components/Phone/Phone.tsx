"use client"; // ✅ Convert Phone.tsx into a Client Component

import { useEffect, useState } from "react";
import { getPhone } from "@/services/phone/PhoneServices";

export default function Phone() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    async function fetchPhone() {
      try {
        const host = window.location.hostname; // ✅ Get hostname dynamically
        console.log("Host:", host);
        const response = await getPhone(host);
        if (response?.data.status) {
          setPhone(response.data.data.phone);
        }
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    }

    fetchPhone();
  }, []);

  return (
    <div id="popup" className="popup content">
      <p className="title is-4">
        <a
          href={`tel:+${phone}`}
          className="button is-danger has-text-weight-bold is-large call-popup"
        >
          <img height={62} width={62} src="/images/phone.gif" alt="call" /> &nbsp;
          <span className="hello">Speak with Expert*</span>
          <span className="hellos">+{phone}</span>
        </a>
      </p>
    </div>
  );
}
