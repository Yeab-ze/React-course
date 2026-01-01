const ValidPass = () => <h1 className="text-green-500">Valid password</h1>;
const InValidPass = () => <h1 className="text-red-500">Invalid password</h1>;

const Rendering = ({ isValid }) => {
  return (
    <div>
      {isValid ? <ValidPass /> : <InValidPass />}
    </div>
  );
};

export default Rendering;
