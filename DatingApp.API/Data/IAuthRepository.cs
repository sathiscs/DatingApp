using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> register(User user, string password);
         Task<User> login(string userName, string password);
         Task<bool> UserExist(string userName); 
    }
}