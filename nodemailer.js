const nodemailer = require('nodemailer');


// Main function to send email
module.exports.sendEmail = async () => {
    try {

        const integration_name = "Perfios"
        const product_name = "PL"
        const statusCode = "500"
        const timeStamp = new Date().toLocaleString() + " IST"
        const transaction_id = "a953656d-2592-f55f-67a5-1054dd1bf056"
        const senderEmail =  "anshumanranjan1998@gmail.com"
        const recipient_name = senderEmail.split('@')[0].trim() || "USER"
        const sender_name = "Anshuman"

        const senderPassword = "kcxc pegg cvlt thlv"
        const recipientEmail = "anshuman.ranjan@in.ey.com,jasmeen.1@in.ey.com"
        const emailSubject = `Alert Notification for ${integration_name}`
        const emailMessage = `

        <p>Dear ${recipient_name},</p>

        <p>I hope this message finds you well.</p>

        <p>We would like to inform you that an alert has been triggered for the integration <strong>${integration_name}</strong> in <strong>${product_name}</strong>. Below are the details of the issue:</p>

        <ul>
            <li><strong>Status Code:</strong> ${statusCode}</li>
            <li><strong>Timestamp:</strong> ${timeStamp}</li>
            <li><strong>Transaction ID:</strong> ${transaction_id}</li>
        </ul>
        
        <p>Please review the situation at your earliest convenience to address any potential concerns. Should you need further assistance or clarification, feel free to reach out to us.</p>
        
        Best regards,
        <p>${sender_name}</p>
        
        `

        // Create a transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderEmail,
                pass: senderPassword
            }
        });

        // Set up email data
        let mailOptions = {
            from: senderEmail,
            to: recipientEmail,
            subject: emailSubject,
            html: emailMessage
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

    } catch (error) {
        console.log('Error occurred: ', error);
    }
};


