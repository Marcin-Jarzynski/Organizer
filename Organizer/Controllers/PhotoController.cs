using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Organizer.RequestDefinitions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Organizer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhotoController : Controller
    {
        private readonly IWebHostEnvironment _environment;
        public PhotoController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        public IActionResult Post([FromForm]NutyRequest request)
        {
            string wwwPath = _environment.WebRootPath;
            string contentPath = _environment.ContentRootPath;


            string path = Path.Combine(_environment.WebRootPath, "Uploads");
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            List<string> uploadedFiles = new List<string>();
            
            string fileName = Path.GetFileName(request.Zdjecie.FileName);
            using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
            {
                request.Zdjecie.CopyTo(stream);
                uploadedFiles.Add(fileName);
                ViewBag.Message += string.Format("<b>{0}</b> uploaded.<br />", fileName);
            }
           
            return Ok();
        }

        [HttpGet]
        public IActionResult GetFileList()
        {
            string wwwPath = _environment.WebRootPath;
            string contentPath = _environment.ContentRootPath;
            string path = Path.Combine(_environment.WebRootPath, "Uploads");
            var fileList = Directory.EnumerateFiles(path).Select(f => f.Substring(path.Length+1)).ToList();
            return Ok(fileList);
        }
    }
}
