import { useState } from "react";

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      price: "₦5,000/month",
      features: ["Monthly checkup", "Pipe inspection"],
    },
    {
      name: "Standard Plan",
      price: "₦10,000/month",
      features: ["Monthly checkup", "Pipe inspection", "Emergency support"],
    },
    {
      name: "Premium Plan",
      price: "₦20,000/month",
      features: [
        "Full home maintenance",
        "Priority response",
        "24/7 emergency support",
      ],
    },
  ];

  const handleSubmit = () => {
    if (!selectedPlan || !paymentProof) {
      alert("Please select a plan and upload payment proof");
      return;
    }

    // TODO: Send to backend admin dashboard
    console.log({
      plan: selectedPlan,
      paymentProof,
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Subscription Plans
      </h1>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(plan.name)}
            className={`cursor-pointer rounded-2xl p-6 shadow-lg border transition ${
              selectedPlan === plan.name
                ? "border-blue-600 bg-blue-50"
                : "bg-white"
            }`}
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-blue-600 font-bold mt-2">{plan.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      {/* Payment Upload */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Upload Payment Proof (Mobile Transfer)
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPaymentProof(e.target.files[0])}
          className="w-full border p-2 rounded-lg"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Submit Request
        </button>

        {submitted && (
          <p className="text-green-600 mt-3 font-medium">
            Request sent to admin dashboard ✔
          </p>
        )}
      </div>
    </div>
  );
}