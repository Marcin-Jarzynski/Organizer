using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Organizer.Controllers.Requests;
using SignalRChat.Hubs;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Organizer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
     
        public LoginController()
        {
         
        }

        [HttpPost]
        public IActionResult Post([FromBody] LoginRequest request)
        {
            Console.WriteLine(request.Login+ " " + request.Password);
            if (request.Login == "ricardo" && request.Password == "milos")
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

     
    }
}
