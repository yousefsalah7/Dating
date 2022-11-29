using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    
    public class KhadamatController : ControllerBase
    {
        private ApplicationDbContext _db;

        public KhadamatController( ApplicationDbContext dataBase )
        {
            this._db= dataBase;
        }

        [HttpPost]
        [Route("[controller]/AddKhedma")]
        public ActionResult AddKhedma(Khedma item)
        {
             _db.Khadamat.Add(item);
              _db.SaveChanges();

            return Ok(item);
              
             
        } 

    }
}