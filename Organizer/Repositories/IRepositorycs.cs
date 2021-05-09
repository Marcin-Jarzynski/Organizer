using System;
using System.Collections.Generic;
namespace Organizer.Repositories
{
    // Przygotowany interfejs zawiera jedynie deklaracje metod
    // Klasa implementująca ten interfejs będzie określała definicję tych metod
    public interface IRepository<T> where T : class
    {
        //IEnumerable<T> GetOverview(Func<T, bool> predicate = null);
        //T GetDetail(Func<T, bool> predicate);
        void Add(T entity);
        void Delete(T entity);

        IEnumerable<T> GetAll();
    }
}