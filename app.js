// backend/utils/email.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendOtpEmail = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // your Gmail
      pass: process.env.EMAIL_PASS,  // your Gmail App Password
    },
  });

  await transporter.sendMail({
    from: `"SecureChat App" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Your OTP for SecureChat',
    text: `Your OTP is: ${otp}`,
  });
};
cars = {
    1: {"model": "Toyota", "rate": 40, "available": True},
    2: {"model": "Honda", "rate": 50, "available": True},
    3: {"model": "BMW", "rate": 120, "available": True},
}

print("Available Cars:")
for cid, car in cars.items():
    print(f"{cid}. {car['model']} - ${car['rate']}/day")

car_id = int(input("\nEnter car ID to rent: "))
days = int(input("Enter number of days: "))

if cars[car_id]["available"]:
    total = cars[car_id]["rate"] * days
    cars[car_id]["available"] = False
    print(f"\nYou rented a {cars[car_id]['model']} for {days} days.")
    print(f"Total cost: ${total}")
else:
    print("Car not available!")
