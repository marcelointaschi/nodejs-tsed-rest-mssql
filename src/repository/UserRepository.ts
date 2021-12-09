import {Repository, EntityRepository} from "typeorm";
import {User} from "../model/entity/User";

/**
 *  This class is the user's repository
 */
@EntityRepository(User)
export class UserRepository extends Repository<User> {

  /**
   *  This method is responsible for search for a user by name
   * 
   * @param name  user's name
   * 
   * @returns user's object with id and name
   */
  async findByName(name: string):Promise<User|undefined> {
    return this.findOne({ name });
  }
}
