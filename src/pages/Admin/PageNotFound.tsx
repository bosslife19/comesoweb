import { Link } from "react-router-dom";
import errored from "../../assets/404-error.jpg"
const PageNotFound: React.FC = () => {
    return (

            <div className="flex flex-col px-3 lg:px-16 gap-3  border-gray  justify-center items-center">
                <div className="">
                    <img

                        src={errored}

                    className="md:w-[400px] w-[200px]"
                        alt="notfound"

                    />
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-[#091E42] font-[500] text-[24px]">
                        Page Not Found
                    </span>
                    <span className="text-gray mt-3 py-[20px] px-[20%] text-center font-normal text-[18px] font-alata  ">
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
