import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-fire-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);

const PricingCard = ({ plan, price, description, features, popular = false, buttonText, buttonVariant = 'secondary' }: any) => (
    <div className={`relative border ${popular ? 'border-fire-red' : 'border-brand-border'} bg-brand-surface rounded-lg p-8 flex flex-col`}>
        {popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-fire-red text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}
        <h3 className="text-xl font-bold text-white">{plan}</h3>
        <p className="mt-2 text-gray-400 text-sm">{description}</p>
        <div className="mt-6">
            <span className="text-4xl font-extrabold text-white">${price}</span>
            <span className="text-gray-400">/mo</span>
        </div>
        <ul className="mt-8 space-y-4 text-sm flex-grow">
            {features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-8">
            <Button variant={buttonVariant as any} className="w-full py-2.5">{buttonText}</Button>
        </div>
    </div>
);

const PricingSection: React.FC = () => {
    const plans = [
        { plan: "Hobby", price: "0", description: "For personal projects & exploration.", features: ["2,000 credits/month", "1 concurrent request", "Community support"], buttonText: "Get started", buttonVariant: "secondary" },
        { plan: "Standard", price: "49", description: "For small teams and startups.", features: ["25,000 credits/month", "5 concurrent requests", "Email support", "Access to all APIs"], popular: true, buttonText: "Subscribe", buttonVariant: "primary" },
        { plan: "Growth", price: "199", description: "For growing businesses.", features: ["150,000 credits/month", "20 concurrent requests", "Priority support", "Higher rate limits"], buttonText: "Subscribe", buttonVariant: "secondary" },
    ];

    return (
        <section className="py-20 sm:py-28 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="Pricing" title="Flexible pricing" description="Explore transparent pricing. Start for free, and scale as you go. No hidden fees, no surprises."/>
                <div className="mt-16 grid lg:grid-cols-3 gap-8">
                    {plans.map(plan => <PricingCard key={plan.plan} {...plan} />)}
                </div>
                <div className="mt-12 text-center border border-brand-border bg-brand-surface rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-white">Enterprise Plan</h3>
                    <p className="mt-2 text-gray-400">Custom solutions for large-scale data extraction needs. Get dedicated support, custom rate limits, and SLAs.</p>
                    <div className="mt-6 flex justify-center">
                        <Button variant="secondary" className="px-6 py-3">Contact Sales</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
