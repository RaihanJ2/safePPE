import { useState } from 'react';

export default function RenewalForm() {
  const [plan, setPlan] = useState('enterprise');

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Renew License</h3>

      <form className="mt-6 space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Select Plan</label>
          <div className="mt-2 space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="enterprise"
                checked={plan === 'enterprise'}
                onChange={e => setPlan(e.target.value)}
                className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
              />
              <span className="ml-3">
                <span className="block font-medium">Enterprise</span>
                <span className="block text-sm text-gray-500">$999/year per 10 users</span>
              </span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="plan"
                value="team"
                checked={plan === 'team'}
                onChange={e => setPlan(e.target.value)}
                className="w-4 h-4 text-yellow-600 border-gray-300 focus:ring-yellow-500"
              />
              <span className="ml-3">
                <span className="block font-medium">Team</span>
                <span className="block text-sm text-gray-500">$499/year per 5 users</span>
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <select className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500">
            <option>1 Year</option>
            <option>2 Years (10% off)</option>
            <option>3 Years (15% off)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Billing Email</label>
          <input
            type="email"
            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="billing@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea
            rows={3}
            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Any special requirements..."
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
          >
            Generate Quote
          </button>
        </div>
      </form>
    </div>
  );
}