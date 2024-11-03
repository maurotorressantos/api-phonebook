/**
 *
 * @note Helpers
 */

exports.generateId = () => {
  const maxId = Math.random().toString(36).substring(2, 6);
  return String(maxId);
};
