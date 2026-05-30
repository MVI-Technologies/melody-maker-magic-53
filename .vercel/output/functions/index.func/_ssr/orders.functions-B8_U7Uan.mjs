import { r as reactExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { l as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DC2tPncE.mjs";
import { o as objectType, e as enumType, s as stringType, l as literalType } from "../_libs/zod.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const briefingSchema = objectType({
  honoreeName: stringType().min(1).max(80),
  giverName: stringType().min(1).max(80),
  relationship: stringType().min(1).max(80),
  occasion: stringType().min(1).max(80),
  story: stringType().min(20).max(2e3),
  musicStyle: stringType().min(1).max(60),
  voiceType: enumType(["masculina", "feminina", "dueto"]),
  mood: stringType().min(1).max(60),
  customerName: stringType().min(1).max(80),
  customerEmail: stringType().email().max(160),
  customerPhone: stringType().max(40).optional().or(literalType(""))
});
const createOrder = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  plan: enumType(["essencial", "completa", "premium"]),
  briefing: briefingSchema
})).handler(createSsrRpc("7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3"));
const getOrderStatus = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  token: stringType().min(8)
})).handler(createSsrRpc("e40ccc975bc24c952c0fab85be305e7810348730dc76906af0792e3377551cfe"));
export {
  createOrder as c,
  getOrderStatus as g,
  useServerFn as u
};
