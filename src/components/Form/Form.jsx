import { useForm } from "react-hook-form";

//assets
import "../../assets/styles/components/form.scss";
import "../../assets/styles/components/form.scss";

//elements
// import Button from "../../elements/Button";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className="form__block">
      <h2 className="form__title title">Let's start a conversation.</h2>
      <div className="divider"></div>
      <p className="form__subtitle subtitle">
        WE ARE LOOKING FORWARD TO HEARING MORE ABOUT YOUR PROJECT AND IDEAS.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          {...register("fullName", {
            required: "The field must be required!",
            minLength: {
              value: 5,
              message: "Min 5 symbols!",
            },
          })}
          placeholder="Enter your full name"
          className="form__input"
        />
        <div className="form__error">
          {errors?.fullName && <p>{errors?.fullName?.message || "Error!"}</p>}
        </div>
        <input
          {...register("phoneNumber", {
            required: "The field must be required!",
            pattern: {
              value: /(7|8|9)\d{9}/,
              message: "Enter the correct phone number!",
            },
          })}
          placeholder="Enter your phone number"
          className="form__input"
        />
        <div className="form__error">
          {errors?.phoneNumber && (
            <p>{errors?.phoneNumber?.message || "Error!"}</p>
          )}
        </div>
        <input
          {...register("email", {
            required: "The field must be required!",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Enter the correct email.",
            },
          })}
          placeholder="Enter your email"
          className="form__input"
        />
        <div className="form__error">
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div>
        <textarea
          {...register("text", {
            maxLength: {
              value: 500,
              message: "Max lenght 500 symbols",
            },
          })}
          placeholder="Leave your message"
        ></textarea>
        <div className="form__error">
          {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
        </div>
        <button className="form__button" type="submit" disabled={!isValid}>
          Request a quote
        </button>
      </form>
    </div>
  );
}
export default Form;
