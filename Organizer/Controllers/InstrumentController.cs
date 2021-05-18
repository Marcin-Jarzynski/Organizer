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
    [Route("api/[controller]")]
    public class InstrumentController : Controller
    {

        private readonly IRepository<Instrument> _instrumentRepository;

        public InstrumentController(IRepository<Instrument> instrumentRepository)
        {
            _instrumentRepository = instrumentRepository;
        }

        //[HttpPost]
       /* public IActionResult Post([FromBody] InstrumentRequest request)
        {
            Instrument leInstrument = new Instrument()
            {
                Name = request.Name
            };
                        _instrumentRepository.Add(leInstrument);
            return Ok();
        }*/

        [HttpGet]
        public IActionResult GetInstrumentList()
        {
            var instrumentList = _instrumentRepository.GetAll();
            return Ok(instrumentList);
        }



    }
}
