import { CLOUD_SERVICES } from "@/data/cloudComparisonData";

interface CloudService {
    name: string;
    icon_url: string;
    link: string;
}

interface ServiceType {
    service_type: string;
    AWS: CloudService[];
    Azure: CloudService[];
    GCP: CloudService[];
    IBMCloud?: CloudService[];
    AlibabaCloud?: CloudService[];
    OracleCloud?: CloudService[];
}

const ShowTable = () => {
    const placeholderIcon =
        "https://png.pngtree.com/png-vector/20210716/ourlarge/pngtree-no-image-available-icon-photo-camera-flat-vector-png-image_3566827.jpg"; // Placeholder image URL

    return (
        <div
            className="overflow-x-auto p-4"
            style={{
                backdropFilter: "blur(10px)", // Creates the glassy effect
                background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                borderRadius: "10px", // Rounded corners
                border: "1px solid rgba(255, 255, 255, 0.3)", // Light border
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            }}
        >
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200 bg-opacity-50">
                        <th className="px-4 py-2 border border-gray-300">Service Type</th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#252f3e" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"></path><path fill="#f90" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"></path>
                                </svg>
                            </div>
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <linearGradient id="k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1" x1="-1254.397" x2="-1261.911" y1="877.268" y2="899.466" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#114a8b"></stop><stop offset="1" stopColor="#0669bc"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6a_VLKafOkk3sBX_gr1)" d="M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"></path><path fill="#0078d4" d="M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2" x1="-1252.05" x2="-1253.788" y1="887.612" y2="888.2" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stopOpacity=".3"></stop><stop offset=".071" stopOpacity=".2"></stop><stop offset=".321" stopOpacity=".1"></stop><stop offset=".623" stopOpacity=".05"></stop><stop offset="1" stopOpacity="0"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6b_VLKafOkk3sBX_gr2)" d="M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"></path><linearGradient id="k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3" x1="-1252.952" x2="-1244.704" y1="876.6" y2="898.575" gradientTransform="translate(1981.75 -1362.063) scale(1.5625)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3ccbf4"></stop><stop offset="1" stopColor="#2892df"></stop></linearGradient><path fill="url(#k8yl7~hDat~FaoWq8WjN6c_VLKafOkk3sBX_gr3)" d="M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"></path>
                                </svg>
                            </div>
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#1976d2" d="M38.193,18.359c-0.771-2.753-2.319-5.177-4.397-7.03l-4.598,4.598	c1.677,1.365,2.808,3.374,3.014,5.648v1.508c0.026,0,0.05-0.008,0.076-0.008c2.322,0,4.212,1.89,4.212,4.212S34.61,31.5,32.288,31.5	c-0.026,0-0.05-0.007-0.076-0.008V31.5h-6.666H24V38h8.212v-0.004c0.026,0,0.05,0.004,0.076,0.004C38.195,38,43,33.194,43,27.288	C43,23.563,41.086,20.279,38.193,18.359z"></path><path fill="#ffe082" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#90caf9" d="M19.56,25.59l4.72-4.72c-0.004-0.005-0.008-0.009-0.011-0.013l-4.717,4.717	C19.554,25.579,19.557,25.584,19.56,25.59z" opacity=".5"></path><path fill="#ff3d00" d="M24,7.576c-8.133,0-14.75,6.617-14.75,14.75c0,0.233,0.024,0.46,0.035,0.69h6.5	c-0.019-0.228-0.035-0.457-0.035-0.69c0-4.549,3.701-8.25,8.25-8.25c1.969,0,3.778,0.696,5.198,1.851l4.598-4.598	C31.188,9.003,27.761,7.576,24,7.576z"></path><path fill="#90caf9" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373	l-4.71,4.71C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z" opacity=".5"></path><path fill="#4caf50" d="M15.712,31.5L15.712,31.5c-0.001,0-0.001,0-0.002,0c-0.611,0-1.188-0.137-1.712-0.373l-4.71,4.71	C11.081,37.188,13.301,38,15.71,38c0.001,0,0.001,0,0.002,0v0H24v-6.5H15.712z"></path><path fill="#ffc107" d="M11.5,27.29c0-2.32,1.89-4.21,4.21-4.21c1.703,0,3.178,1.023,3.841,2.494l4.717-4.717	c-1.961-2.602-5.065-4.277-8.559-4.277C9.81,16.58,5,21.38,5,27.29c0,3.491,1.691,6.59,4.288,8.547l4.71-4.71	C12.53,30.469,11.5,28.999,11.5,27.29z"></path>
                                </svg>
                            </div>
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#3f51b5" d="M48 16L48 14 40.469 14 39.809 16zM33 31L33 29 29 29 27 29 27 31zM39.766 28L40.51 26 34.51 26 35.266 28zM29 26H33V28H29zM29 23H33V25H29zM42 29L42 31 48 31 48 29 46 29zM36.181 19L35.521 17 27 17 27 19 29 19zM37.17 22L36.51 20 29 20 29 22zM33.378 23L34.133 25 40.883 25 41.628 23zM42 23H46V25H42zM27 32H33V34H27zM35.191 16L34.531 14 27 14 27 16zM36.776 32L37.531 34 38.276 32zM42 32H48V34H42zM39.479 17L38.819 19 46 19 48 19 48 17zM39.393 29L35.643 29 36.398 31 38.648 31zM42 26H46V28H42zM38.49 20L37.83 22 46 22 46 20zM0 14H8V16H0zM0 17H8V19H0zM2 20H6V22H2zM2 23H6V25H2zM2 26H6V28H2zM0 29H8V31H0zM0 32H8V34H0zM10 17H18V19H10zM24.977 16c-.913-1.208-2.347-2-3.977-2H10v2h7.023H24.977z"></path><path fill="#3f51b5" d="M25.578 17h-9.131C16.171 17.613 16 18.283 16 19h10C26 18.288 25.846 17.613 25.578 17zM23.975 23H12v2h11.973c-.833-.62-1.854-1-2.973-1C22.119 24 23.142 23.621 23.975 23zM17.023 32H10v2h11c1.63 0 3.065-.792 3.977-2H17.023zM18 29h-2-6v2h6.447H18h7.578C25.846 30.387 26 29.712 26 29H18zM21 20c0 0 0 .083 0 1s-1 1-1 1h4.979c.441-.584.77-1.257.921-2H21zM12 20H17V22H12z"></path><g><path fill="#3f51b5" d="M21 28h4.885c-.156-.738-.467-1.418-.907-2H20c0 0 1 .167 1 1S21 28 21 28zM12 26H17V28H12z"></path></g>
                                </svg>
                            </div>
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <img src="https://www.vectorlogo.zone/logos/alibabagroup/alibabagroup-icon.svg" alt="" />
                            </div>
                        </th>
                        <th className="px-4 py-2 border border-gray-300">
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#EF0F14" d="M2.861,21.998h2.917c1.05,0,2.261,0.896,2.261,2s-1.21,2-2.261,2H2.861c-1.05,0-1.861-0.895-1.861-2C1,22.893,1.811,21.998,2.861,21.998z M43.021,20.998c-1.401,0-2.521,1.343-2.521,3s1.13,3,2.521,3h4.019l0.96-1h-5c-0.898-0.047-1.289-0.638-1.5-1.5h5.54l0.96-1h-6.5c0.213-0.861,0.592-1.495,1.5-1.5h4.04l0.96-1H43.021z M34,20.998v5.426c0,0.148,0.095,0.292,0.201,0.402s0.249,0.172,0.405,0.172L38.54,27l1-1L35,25.998V21L34,20.998z M27.842,20.998c-1.591,0-2.851,1.346-2.851,3.003s1.26,2.997,2.851,2.997l3.649-0.012l1.149-0.988h-4.819c-1.05,0-1.84-0.894-1.84-1.999s0.79-2.001,1.84-2.001l3.689,0.016l1.13-1.016H27.842z M21,20.998c-0.258,0-0.522,0.215-0.67,0.483l-2.83,5.517h1l2.5-5l1.691,3H20.04l0.941,0.98l2.181-0.006l0.658,1.025l1.081-0.009l-3.277-5.507C21.394,21.112,21.25,20.998,21,20.998z M10,20.998v6h1v-5h3c0.515,0,1,0.464,1,1s-0.485,1-1,1h-2.5l3.481,3H16.5l-2.5-2l0.337-0.009C15.077,24.99,16,24.119,16,22.998c0-1.121-0.687-1.986-1.553-2H10z M2.882,20.998c-1.591,0-2.882,1.344-2.882,3s1.291,3,2.882,3H5.76c1.591,0,3.24-1.343,3.24-3s-1.649-3-3.24-3H2.882z"></path>
                                </svg>
                            </div>
                        </th>
                    </tr>


                </thead>
                <tbody>
                    {CLOUD_SERVICES.map((service: ServiceType) => (
                        <tr key={service.service_type} className="bg-white bg-opacity-50">
                            <td className="px-4 py-2 border border-gray-300 font-semibold">
                                {service.service_type}
                            </td>
                            {["AWS", "Azure", "GCP", "IBMCloud", "AlibabaCloud", "OracleCloud"].map(
                                (cloudProvider) => {
                                    const services = service[cloudProvider as keyof ServiceType] as CloudService[] | undefined;

                                    return (
                                        <td className="px-4 py-2 border border-gray-300" key={cloudProvider}>
                                            {services?.map((cloudService: CloudService, index: number) => (
                                                <div key={index}>
                                                    <a
                                                        href={cloudService.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center"
                                                    >
                                                        <img
                                                            src={cloudService.icon_url || placeholderIcon}
                                                            alt={cloudService.name || ""}
                                                            className="w-6 h-6 mr-2 rounded"
                                                        />
                                                        {cloudService.name}
                                                    </a>
                                                </div>
                                            ))}
                                        </td>
                                    );
                                }
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowTable;