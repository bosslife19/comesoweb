import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
    return (

            <div className="flex flex-col px-3 lg:px-16 gap-3  border-gray mt-40 justify-center items-center">
                <div>
                    <img

                        src="/notfound.svg"
 
                        alt="notfound"

                    />
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-[#091E42] font-normal text-[24px]">
                        Page Not Found
                    </span>
                    <span className="text-gray mt-3 lg:w-[273px] text-center font-normal text-[18px]">
                        Opps, looks like you're navigating throught the digital jungle with a patchy connection.
                        Fear not, our tech guides are working their magic to restore your path!
                    </span>
                </div>

                <Link to="/dashboard">
                {/* <Button
                    full
                    disabled={false}
                    loading={false}
                    round={false}
                    size="medium"
                    type="primary"
                >
                    Try again
                </Button> */}
                </Link>
            </div>

    );
};

export default PageNotFound;
