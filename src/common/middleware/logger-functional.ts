export function Logger2(req, res, next) {
  console.log(`Request...`);
  next();
};