import SubscriptionCard from "./SubscriptionCard";

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control"
];

const monthlyPaidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
];

const annualPaidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has"
];


const Subscription = () => {
    return (
        <div className="p-10">
            <h1 className="text-5xl font-sembold py-5 pb-16 text-center">Pricing</h1>
            <div className="flex flex-col lg:flex-row justify-center gap-9">

                <SubscriptionCard 
                data={{ 
                    planName: "Free", 
                    features: freePlan, 
                    planType: "FREE", 
                    price: 0, 
                    buttonName: true ? "Current Plan" : "Get Started" 
                }} />

                <SubscriptionCard 
                data={{ 
                    planName: "Monthly Paid Plan", 
                    features: monthlyPaidPlan, 
                    planType: "MONTHLY", 
                    price: 799, 
                    buttonName: true ? "Current Plan" : "Get Started" 
                }} />

                <SubscriptionCard 
                data={{ 
                    planName: "Annual Paid Plan", 
                    features: annualPaidPlan, 
                    planType: "ANNUALY", 
                    price: 6711, 
                    buttonName: true ? "Current Plan" : "Get Started" 
                }} />
            </div>
        </div>
    )
}

export default Subscription