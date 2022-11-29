using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class UsersController : Controller
    {
        private ApplicationDbContext _db;
        public UsersController(ApplicationDbContext applicationDbContext)
        {
         _db=   applicationDbContext;
        }
        
        [Route("[controller]")]
        [HttpGet]
        public async Task< ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await _db.Users.ToListAsync();
        }
         [Route("[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _db.Users.FindAsync(id);
        } 

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Error()
        {
            return View("Error!");
        }
    }
}