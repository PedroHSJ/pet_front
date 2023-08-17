import * as yup from "yup";
import { INVALID_CPF, REQUIRED } from "../constants/errors";
import { isValidCPF } from "../utils";

export const LoginSchemaWithPassword = yup.object().shape({
  // cpf: yup
  // 	.string()
  // 	.test('isValidCPF', INVALID_CPF, isValidCPF)
  // 	.required(REQUIRED),
  email: yup.string().email().required(REQUIRED),
  password: yup.string().required(REQUIRED),
});

export const LoginSchemaWithoutPassword = yup.object().shape({
  cpfOrCns: yup.string().required(REQUIRED),
});
