using System;
using System.Threading.Tasks;
using DatingApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class AuthRepossitory : IAuthRepository
    {
        private readonly MyDataContext _context;
        public AuthRepossitory(MyDataContext context)
        {
            _context = context;
        }

        public async Task<User> login(string userName, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == userName);
            if(user == null)
                return null;
            if(!VerifyUserHash(password,user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            return user;
        }

        private bool VerifyUserHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var value = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var inComingPasswordHash = value.ComputeHash( System.Text.Encoding.UTF8.GetBytes(password));
                
                for(int i= 0; i < inComingPasswordHash.Length; i++ )
                {
                    if (inComingPasswordHash[i] != passwordHash[i]) return false;    
                }
            }

            return true;
        }

        public async Task<User> register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var value = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = value.Key;
                passwordHash = value.ComputeHash( System.Text.Encoding.UTF8.GetBytes(password));

            }
        }

        public async Task<bool> UserExist(string userName)
        {
            if( await _context.Users.AnyAsync(x=> x.UserName == userName))
            {
                return true;
            }
            return false;
        }
    }
}