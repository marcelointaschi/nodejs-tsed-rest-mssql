import {Controller, Get, QueryParams} from "@tsed/common";
import { UserService } from "src/services/User/UserService";

/**
 * This class is the user's controler 
 */
@Controller("/user")
export class UserController {

  constructor(private userService:UserService){

  }

  /**
   *  This method is responsible validate if the customer is in the database
   * 
   * @param name user's name
   * 
   * @returns information about the user
   */
  @Get("/")
  get(@QueryParams("name") name: string) {
    return this.userService.getUser(name);
  }
}
