﻿ using System.Runtime.CompilerServices;

//[assembly: InternalsVisibleTo("ProjetoB")]
namespace ProjetoA
{
    #region Classes

    public class Publica
    {
        public void TestePublico() { }
        private void TestePrivado() { }
        internal void TesteInternal() { }
        protected void TesteProtegido() { }
        private protected void TestePrivadoProtegido() { }
        protected internal void TesteProtegidoInterno() { }
    }

    public sealed class Selada { }

    class Privada { }

    internal class Interna { }

    abstract class Abstrata { }

    #endregion
    
    #region Testes

    class TesteClasses
    {
        public TesteClasses()
        {
            var publica = new Publica();
            var privada = new Privada();
            var interna = new Interna();
            //var abstrata = new Abstrata();
        }
    }

    //class TesteSelada : Selada { }

    class TesteModificador1
    {
        public TesteModificador1()
        {
            var publica = new Publica();

            publica.TestePublico();
            publica.TesteInternal();
            publica.TesteProtegidoInterno();
            //publica.TesteProtegido();
            //publica.TestePrivadoProtegido();
            //publica.TestePrivado();
        }
    }

    class TesteModificador2 : Publica
    {
        public TesteModificador2()
        {
            TestePublico();
            TesteInternal();
            TesteProtegido();
            TesteProtegidoInterno();
            TestePrivadoProtegido();
            //TestePrivado();
        }
    }

    #endregion
}

/*******************************************************/
// public:

// Access is not restricted.
/*******************************************************/
// protected: //classe ou método que estiver herdando esse tipo de modificador de acesso que podem utiliza-la. Ex: protected Eletrodomestico(string nome, int voltagem)

// Access is limited to the containing class or types
// derived from the containing class.
/*******************************************************/
// internal: //Quem estiver utilizando a classe no mesmo assembly, tem acesso a essa classe ou método. (mesma dll) Exemplo, qualquer classe dentro do projeto A. Se estivesse no projeto B (outra dll) não tem acesso.

// Access is limited to the current assembly.
/*******************************************************/
// protected internal: //Utilizado para métodos

// Access is limited to the current assembly or types
// derived from the containing class.
/*******************************************************/
// private:

// Access is limited to the containing type.
/*******************************************************/
// private protected: //Utilizado para métodos

// Access is limited to the containing class or types
// derived from the containing class within the current
// assembly.Available since C# 7.2.
/*******************************************************/
