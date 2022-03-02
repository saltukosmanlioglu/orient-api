import cors from "cors";
import morgan from "morgan";
import http from "http";
import cookieParser from "cookie-parser";

type SSLEnabled = {
  enabled: true;
  key: Buffer | string;
  cert: Buffer | string;
};
type SSLDisabled = {
  enabled?: false;
};
type MorganEnabled<MorganReq extends http.IncomingMessage = http.IncomingMessage, MorganRes extends http.ServerResponse = http.ServerResponse> = {
  enabled: true;
  format: string | "combined" | "common" | "dev" | "short" | "tiny"
  options?: morgan.Options<MorganReq, MorganRes>;
};
type MorganDisabled<MorganReq extends http.IncomingMessage = http.IncomingMessage, MorganRes extends http.ServerResponse = http.ServerResponse> = {
  enabled?: false;
};
export declare interface OoicConfig<
  CorsReq extends cors.CorsRequest = cors.CorsRequest,
  MorganReq extends http.IncomingMessage = http.IncomingMessage,
  MorganRes extends http.ServerResponse = http.ServerResponse
> {
  cors?: {
    enabled: boolean;
    options?: cors.CorsOptions | cors.CorsOptionsDelegate<CorsReq>;
  };
  morgan?: MorganEnabled<MorganReq, MorganRes> | MorganDisabled<MorganReq, MorganRes>;
  cookieParser?: {
    enabled: boolean;
    secret?: string | string[];
    options?: cookieParser.CookieParseOptions;
  };
  ssl?: SSLEnabled | SSLDisabled;
}