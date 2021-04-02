using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Organizer.RequestDefinitions
{
    public class NutyRequest
    {
        public string PiosenkaId { get; set; }
        public string InstrumentId { get; set; }
        public IFormFile Zdjecie { get; set; }
    }
}
