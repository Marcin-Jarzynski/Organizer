using Organizer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Organizer.Repositories
{
    public class InstrumentRepository : IRepository<Instrument>
    {
        private readonly organizerContext db = new organizerContext();
        public void Add(Instrument entity)
        {
            db.Instruments.Add(entity);
            db.SaveChanges();
        }
        public void Delete(Instrument entity)
        {
            db.Instruments.Remove(entity);
        }

        public IEnumerable<Instrument> GetAll()
        {
            return db.Instruments.ToList();

        }
        //public Song GetDetail(Func<Song, bool> predicate)
        //{
        //    return db.Songs.FirstOrDefault(predicate);
        //}
        //public IEnumerable<Song> GetOverview(Func<Song, bool> predicate = null)
        //{
        //    if (predicate != null)
        //        return db.Songs.Where(predicate);
        //    return db.Songs;
        //}
        //internal void SaveChanges()
        //{
        //    db.SaveChanges();
        //}
    }
}