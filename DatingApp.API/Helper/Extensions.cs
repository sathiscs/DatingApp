using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helper
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
        }
    }
}