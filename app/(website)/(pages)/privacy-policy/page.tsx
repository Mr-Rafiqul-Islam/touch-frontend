import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen py-12">
  <div className="container mx-auto max-w-5xl px-6">
    <div className="bg-white rounded-lg shadow-xl p-8">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        <span className="text-primary-color">Privacy Policy</span>
      </h1>
      {/* Section: Introduction */}
      <section className="text-lg text-gray-600 mb-8 leading-relaxed">
        <p className="mb-4">
            At {" "}
          <span className="font-semibold text-primary-color">Touch</span>! we take your privacy seriously. We’re committed to keeping your personal information safe while providing you with a seamless and secure service. Please take a moment to read through our Privacy Policy to understand how we collect and use your information.
        </p>
        <p>
        <strong>Please Note: </strong>This Privacy Policy may change from time to time. To stay updated, we encourage you to check back periodically.

By using this website, you agree to the terms of this Privacy Policy. If you have any concerns, any disputes will be handled according to the laws of [Your Jurisdiction].

By using our website, you give us your consent to collect and use your personal information as outlined here. This Privacy Policy is part of our Terms of Use.
        </p>
      </section>
      {/* Divider */}
      <div className="border-b border-gray-300 my-6" />
      {/* Section: Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-primary-color text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
            1
          </span>
          What Information We Collect
        </h2>
        <ul className="list-inside list-disc text-gray-600 pl-4 space-y-2">
          <li>
          When you visit Touch Ticketing, we may collect some basic information to help us provide better services tailored to your needs. You can browse our site without sharing your personal details. However, when you choose to provide information, like when you sign up or make a purchase, you are no longer anonymous to us.
          </li>
          <li>
          We may collect and analyze your browsing data (such as the pages you visit and how long you stay on them) to improve our services. This could include your IP address, browser information, and the websites you visit before and after ours.
          </li>
          <li>
          We use cookies on certain pages of our website to improve user experience, measure the success of promotions, and ensure security. Some features may only work when cookies are enabled. We also want to let you know that third parties may use cookies, but we have no control over this.
          </li>
          <li>
          When you make a purchase, we collect details such as your billing address, payment method, and any feedback you provide. This information helps us process your transaction and offer better service.
          </li>
          <li>
          If you contact us, we might keep records of those interactions to assist you in the future.
          </li>
          <li>
          When you create an account, we’ll ask for your email address, name, and phone number. We may use this to send you personalized offers and updates based on your preferences. Rest assured, we only collect what we need, and your privacy is important to us.
          </li>
        </ul>
      </section>
      {/* Section: How We Use Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-primary-color text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
            2
          </span>
          Sharing Your Information
        </h2>
        <p className="text-gray-600 leading-relaxed">
        We will never share your personal information unless it’s absolutely necessary. We may need to do so in the following situations:
        </p>
        <ul className="list-inside list-disc text-gray-600 pl-4 space-y-2">
            <li>To comply with legal requirements, such as regulations or court orders</li>
            <li>To enforce our Terms of Service or investigate potential violations</li>
            <li>To detect or prevent fraud, security issues, or other technical problems</li>
            <li>To protect the safety, rights, and property of Touch Ticketing, our users, or the public</li>
        </ul>
        <p className='my-4 text-gray-600 leading-relaxed'>We may share aggregated, non-personally identifiable data (like trends in how people use our services) with our partners, such as bus operators or travel agencies, but we will never share personal details like your name or contact information.</p>
        <p className='text-gray-600 leading-relaxed'>If Touch Ticketing is involved in a merger, sale, or acquisition, your personal information will remain confidential. We’ll notify you if your information is transferred to a new policy.</p>
      </section>
      {/* Section: Data Sharing */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-primary-color text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
            3
          </span>
          Collecting and Using Your Data
        </h2>
        <div>
            <h3 className='text-lg font-bold text-gray-800 mb-4'>Information Collected While Using the App</h3>
            <p className="text-gray-600 mb-4">
            With your permission, we may collect:
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-600 space-y-2">
            <li>Your location</li>
            <li>Your device’s contact list</li>
            <li>Photos or other data from your device’s camera or photo library</li>
            </ul>
            <p className="my-2 text-gray-600">
            This information helps us improve and personalize the services we provide. We may upload it to our servers or store it locally on your device.
            </p>
        </div>
        <div>
            <h3 className='text-lg font-bold text-gray-800 mb-4'>Contact List Sync for Ticket Purchases:</h3>
            <p className='text-gray-600 mb-4'>To help with ticket purchases, we might access your device’s contacts list. This information is securely sent via our own encrypted platform. You can enable or disable this feature at any time through your device settings. We process your data only within Touch Ticketing’s secure system and do not share it with third parties.</p>
        </div>
        <p className='my-2 text-gray-600'>
        If you have any questions or concerns, feel free to contact us at:{" "}	
        <a href="mailto:info@touchticketing.com" className="text-primary-color font-bold transition-all duration-300 hover:underline">info@touchticketing.com.</a>
        </p>
      </section>
      {/* Section: Data Safety */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-primary-color text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
            4
          </span>
          Keeping Your Data Safe
        </h2>
        <p className="text-gray-600 mb-4">
        We’ve implemented strong security measures to protect your information from loss or misuse. When you update your account details, we use a secure server to keep everything safe. We also use SSL encryption to prevent identity theft and safeguard your personal information.
        </p>
        
        
      </section>
      {/* Section: Consent  */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="bg-primary-color text-white w-8 h-8 flex justify-center items-center rounded-full mr-3">
            5
          </span>
          Your Consent
        </h2>
        <p className='text-gray-600 mb-2'>By using our website and providing your personal information, you consent to the way we collect, use, and share your data as described in this Privacy Policy.</p>
        <p className='text-gray-600 mb-2'>Please note that we may update this Privacy Policy occasionally, so we recommend checking it every now and then to stay informed about how we handle your data.</p>
      </section>
     
    </div>
  </div>
</div>

  )
}

export default PrivacyPolicy