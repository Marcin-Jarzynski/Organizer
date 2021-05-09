using Microsoft.AspNetCore.Mvc;
using Organizer.Controllers.Requests;
using Organizer.Models;
using Organizer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Organizer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SongController : Controller
    {

        private readonly IRepository<Song> _songRepository;

        public SongController(IRepository<Song> songRepository)
        {
            _songRepository = songRepository;
        }

        [HttpPost]
        public IActionResult Post([FromBody] SongRequest request)
        {
            Song leSong = new Song()
            {
                Name = request.Name
            };
            _songRepository.Add(leSong);
            return Ok();
        }



        }
}
