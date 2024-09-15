"use client";

import React from "react";

const myContacts = [
  {
    address: "411 Ramos compound carlos st. Novaliches Quezon City",
    phoneNo: "09292260447",
    email: "luisrafhael1122@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20 mt-10">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        {myContacts.map((contact, index) => (
          <div key={index}>
            <p className="my-4">
                {contact.address}
            </p>
            <p className="my-4">
                {contact.phoneNo}
            </p>
            <p className="my-4 underline">
                {contact.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
