import express from "express";
declare global {
  namespace Express {
    interface Request {
      authUser: any;
      clientIp: string;
      files: any
    }
  }
}

export interface Request<T> extends Express.Request {
  body: T
}