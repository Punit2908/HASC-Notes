import { data, data1 } from "../App";
const ComponentC = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => (
          <data1.Consumer>
            {(age) => (
              <h2>
                Hello I am {name} and I am {age} years old
              </h2>
            )}
          </data1.Consumer>
        )}
      </data.Consumer>
    </div>
  );
};
export default ComponentC;
