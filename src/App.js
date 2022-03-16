import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

function App() {

  const handleClickLogin = (values) => console.log(values);
  const handleClickRegister = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    user: yup
      .string()
      .required(" Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve conter no minimo 6 caracteres")
      .required("Este campo é obrigatório"),
  });

  const validationRegister = yup.object().shape({
    first_name: yup
      .string()
      .required(" Este campo é obrigatório"),
    last_name: yup
      .string()
      .required(" Este campo é obrigatório"),
    user: yup
      .string()
      .required(" Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve conter no minimo 6 caracteres")
      .required("Este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], " As senhas não são iguais!"),
  })

  return <div className="container">
    <h1>Login</h1>
    {/* Fazer login */}

    <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
      <Form className="login-form"> 
        <div className="login-form-group">
          <Field name="user" className="form-field" placeholder="Usuário" />
          <ErrorMessage component="span" name="user" className="form-error" />
        </div>
        <div className="login-form-group">
          <Field name="password" type="password" className="form-field" placeholder="Senha" />
          <ErrorMessage component="span" name="password" className="form-error" />
        </div>
        <button className="button" type="submit">Login</button>
      </Form>
    </Formik>

    {/* --------------------------------------------------------------------------------------- */}

    {/* Cadastrar um novo usuário */}
    <h1>Cadastro</h1>

    <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
      <Form className="login-form"> 
        <div className="login-form-group">
          <Field name="first_name" className="form-field" placeholder="First Name" required />
          <ErrorMessage component="span" name="first_name" className="form-error" />
        </div>
        <div className="login-form-group">
          <Field name="last_name" className="form-field" placeholder="Last Name" />
          <ErrorMessage component="span" name="last_name" className="form-error" />
        </div>
        <div className="login-form-group">
          <Field name="user" className="form-field" placeholder="Usuário" />
          <ErrorMessage component="span" name="user" className="form-error" />
        </div>
        <div className="login-form-group">
          <Field name="password" className="form-field" placeholder="Senha" type="password" />
          <ErrorMessage component="span" name="password" className="form-error" />
        </div>
        <div className="login-form-group">
          <Field name="confirmPassword" className="form-field" placeholder="Confirme sua Senha" type="password" />
          <ErrorMessage component="span" name="confirmPassword" className="form-error" />
        </div>
        <button className="button" type="submit">Cadastrar</button>
      </Form>
    </Formik>
  </div>
}

export default App;
