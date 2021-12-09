import {Service} from "@tsed/common";
import { UserRepository } from "src/repository/UserRepository";

/**
 *  This class is the user's service 
 */
@Service()
export class UserService {

  constructor(private userRepository:UserRepository){
  }
  
  /**
   * This method is responsible to search for a user in the database
   * 
   * @param name user's name
   * 
   * @returns  message informing you if the user exists in the database
   */
   async getUser(name:string): Promise<string> {
    const user = await this.userRepository.findByName(name);

    if(user){
      return `The user ${user.name} is in the Database`;
    }
    return `The user ${name} is not in the Database`;
  }
}
