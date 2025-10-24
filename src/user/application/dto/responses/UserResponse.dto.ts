import { User } from "src/user/domain/entities/User.entity";

export class UserResponseDto {

    static build(user: User) : {id: string, name: string, email: string} {
        return {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
        }
    }
}