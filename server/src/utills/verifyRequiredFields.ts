interface VerifyRequiredFieldsParams<T> {
  object: T;
  requiredFields: (keyof T)[];
}
/**
 * Verifies that the required fields in the given object are not undefined or null.
 *
 * @template T - The type of the object.
 *
 * @param {VerifyRequiredFieldsParams<T>} params - The parameters for the verification.
 * @param {T} params.object - The object to verify.
 * @param {Array<keyof T>} params.requiredFields - The list of required fields.
 * @returns {boolean} - True if all required fields are present and not undefined or null, false otherwise.
 *
 * @example
 * const user = {
 *   id: 1,
 *   username: 'john_doe',
 *   email: 'john.doe@example.com',
 * };
 *
 * const requiredFields = ['id', 'username', 'email'];
 * const isValidUser = verifyRequiredFields({ object: user, requiredFields });
 * console.log(isValidUser); // Output: true
 *
 * const missingFieldsUser = {
 *   id: 2,
 *   username: 'jane_doe',
 *   // Missing 'email' field
 * };
 * const isValidMissingFieldsUser = verifyRequiredFields({ object: missingFieldsUser, requiredFields });
 * console.log(isValidMissingFieldsUser); // Output: false
 */
const verifyRequiredFields = <T extends Object>({
  object,
  requiredFields,
}: VerifyRequiredFieldsParams<T>) => {
  if (!object || !requiredFields) return false;
  for (const key of requiredFields) {
    if (!object[key]) {
      return false;
    }
  }
  return true;
};
