import { HttpStatus } from "@nestjs/common";

export interface RestContent {
  data: any;
  code: HttpStatus
  [key: string]: any;
}