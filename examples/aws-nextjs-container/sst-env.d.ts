/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "MyRedis": {
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Redis"
      "username": string
    }
    "MyService": {
      "service": string
      "type": "sst.aws.Service"
      "url": string
    }
    "MyVpc": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
  }
}