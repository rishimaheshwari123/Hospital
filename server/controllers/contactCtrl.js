const mailSender = require("../utils/mailSender");
const { eventContactEmail } = require("../templates/contactFormRes");




const contactCtrl = async (req, res) => {
    const { name, email, contact, subject, dob, message, } = req.body;

    try {

        if (!email || !name || !contact || !subject || !dob || !message) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }
        const emailRes = await mailSender(
            "rishimaheshwari040@gmail.com",
            "Your Data send successfully",
            eventContactEmail(name, email, contact, subject, dob, message)
        )

        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}
module.exports = { contactCtrl };
