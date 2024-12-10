import React from 'react';
import { Cloud } from 'lucide-react';
import { CLOUD_SERVICES } from '@/data/cloudComparisonData';

interface Service {
    service_name: string;
    img_url: string;
    redirect_url: string;
}

interface ServiceProvider {
    provider_name: string;
    provider_logo: string;
    services: Service[];
}

interface CloudServiceCategory {
    service_type: string;
    service_providers: ServiceProvider[];
}

const ProviderLogo: React.FC<{ provider: string }> = ({ provider }) => {
    switch (provider.toLowerCase()) {
        case 'aws':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 48 48">
                    <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z" />
                    <path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z" />
                </svg>
            );
        case 'azure':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 48 48">
                    <path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z" />
                </svg>
            );
        case 'google':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 48 48">
                    <path fill="#1976d2" d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598 c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5 c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288 C43,23.563,41.086,20.279,38.193,18.359z" />
                </svg>
            );
        default:
            return <Cloud className="w-8 h-8" />;
    }
};

const ShowTable: React.FC = () => {
    return (
        <div className="overflow-x-auto p-4 rounded-lg shadow-lg bg-white/20 backdrop-blur-sm border border-white/30">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100/50">
                        <th className="px-4 py-2 border border-gray-300">Service Type</th>
                        {['aws', 'azure', 'gcp'].map((provider) => (
                            <th key={provider} className="px-4 py-2 border border-gray-300">
                                <div className="flex justify-center">
                                    <ProviderLogo provider={provider} />
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {CLOUD_SERVICES.map((category) => (
                        <tr key={category.service_type} className="hover:bg-gray-50/50">
                            <td className="px-4 py-2 border border-gray-300 font-medium">
                                {category.service_type}
                            </td>
                            {['aws', 'azure', 'google'].map((providerName) => (
                                <td key={providerName} className="px-4 py-2 border border-gray-300">
                                    {category.service_providers
                                        .find(p => p.provider_name.toLowerCase() === providerName)
                                        ?.services.map((service, idx) => (
                                            <div
                                                key={idx}
                                                className="py-1 px-2 my-1 rounded hover:bg-gray-100/50 transition-colors"
                                            >
                                                <a
                                                    href={service.redirect_url || '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                                                >
                                                    {service.img_url ? (
                                                        <img
                                                            src={service.img_url}
                                                            alt=""
                                                            className="w-5 h-5 object-contain"
                                                        />
                                                    ) : (
                                                        <Cloud className="w-5 h-5" />
                                                    )}
                                                    <span className="text-sm">{service.service_name}</span>
                                                </a>
                                            </div>
                                        ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTable;