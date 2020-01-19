using DatingApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public partial class MyDataContext : DbContext
    {
        public MyDataContext(DbContextOptions<MyDataContext> options ): base(options){}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}