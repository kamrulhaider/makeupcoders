import React from "react";

const EmailTemplate = ({ name, sender, phone, message }) => (
  <div>
    <table width={400} border={1} cellSpacing={0}>
      <tr>
        <th>Name</th>
        <td>{name}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{sender}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>{phone}</td>
      </tr>
      <tr>
        <th>Message</th>
        <td>{message}</td>
      </tr>
    </table>
  </div>
);

export default EmailTemplate;
