import React from 'react';
import { Award, Users, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About Nurs Event</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Bringing together the brightest minds in technology and artificial intelligence
              to shape the future of innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We're dedicated to creating world-class events that foster innovation,
              collaboration, and knowledge sharing in the tech and AI community.
            </p>
            <p className="text-gray-600">
              Our events bring together industry leaders, researchers, and innovators
              to discuss the latest developments and shape the future of technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">World-class events and speakers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Global tech network</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Reach</h3>
              <p className="text-sm text-gray-600">Events worldwide</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Cutting-edge content</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emily Chen',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
              },
              {
                name: 'Nurhussein Ahmed',
                role: 'Event Director',
                image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgQCg4ODQ4QCBAJCwoNCwoKCBAICQ0KIB0iIiAdHx8kKCgsJCYlJx8WLTEtJSkrLi4uIyAzODMsNyg5LisBCgoKDg0OFRAQFSsdFRotLS0tLSstLS0tLSstLS0rNy0tLSsrKzcrLSstKystKy0rLisrKys3LS0rKy0rNys3K//AABEIAJkAmQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEMQAAIBAgMFBQQGBwYHAAAAAAECAwARBBIhBSIxQVEGEzJhcUKBkaEHFFKxwdEjM1NicnOSFiQ0lKLwFVRjhMLh8f/EABoBAAEFAQAAAAAAAAAAAAAAAAABAgMEBQb/xAAoEQACAgEEAgEEAgMAAAAAAAAAAQIDEQQSITFBURMFIjJhUoEUI0L/2gAMAwEAAhEDEQA/ANDauAolq61dJk53AwLf3C9dlogFdahMMA8tLlolq61LkMAwKdan2pQKTIYGWrstEApctG4MA7V1qJlrrUZDAO1LaiZaXLSNgDtS2p4Wly0mQGAUoFPApQKTIDLUtqeBXWpMgR7UuWjjL04dOdOWO/lRuSJFH0RstLlqZHCL9b0QQR89PQ0jtQvxtlflpctTvq6dflSHDr9q3QGk+VA6mQ7VwWpLxr7OvI3rNbb2x4ooDoCyySqeLcwD95pll8YLLH06eVktqX9kjae3MNCSqg4qQaGOM5UVvM/hVM/abHX8Mafu5C9vfeq1gaFICRWPb9Rm39vCNun6bXGP3cst4O2MitaaEOObwvkce48fjWl2dtDC4iPPC+cL40IyujdCK81lU3puE2hPDMJI2KMh0Yc16Ecx5VY0+ucniRW1P0+KTceD1i1Laq3s9tqDFxm1o5YgplhvwU8COoPyOlW+WtJTyZDi08NAwK61EApbUZEwCApbUW1dloyI0DtXWolq61GRMDQV6Wt86kCYdMunxqOBT0NMkieE8ElZB6+Vq4ufs/KnxEEflSuD/wDartpPBcSbWRiNpwtTj6A9BTQ4HK/uri+nC/maRy54HKPHJTdrcX3GC3bJJjH7qMr4kW1yfcNPUisKGAsOAUWAq67dzk43Dp+zwzvb94tb8Ko8NHc7xCX13jlrM1lrzg09HUks+yZGFK9LUx1UX0v6iiCLD+zIrX42bMwpUw7FblrC7cayHPns01Ao8aQLkaa9KppSc3vrSY8YQbplUHiNeNUOLh+yyvfhY1b08+SvdHKC7H2nJhsZDiF4RtllUe3CeIPu19QK9oAUgFd4MFZT1U6ivBSDqDyHCvbOyeIMuyMHIdS2FiVv4hofure0821yc9rIJPgn5aXLRctdlqw2UcAgtLlomWltRkMAstLlomWuy0ZDBGtTgKeFrz3b/azaMGNniSawikcKv1WN1VeQ1F6jtuUEsk9VLsbwekQOAtvO5NEcg+deSYf6Qtp51VnisTa7YDM3yIq1j+kbGIuv1Z+ufAyo3yc1UnfB8rsv1U2JYfR6C5APX1oTz1iR9IEjcfqov5Txt+NO/tepsS2GALWJ+syrbT+E1H/kQXbJfhl6A9s3DbQDDeyYNF0OazZjpWT2hiMKBZ3YswuwDBFC+Z5Cp2CBzWd+/JZyXHtrc2156c6PidkxlxMoVGU5lLHLWXfapT/Rq01OMMGJOLCTEwv3gBALBmy68NSK0z4rFHZ7FdCh3gfShjZW8bKsaBswjjj3GfqdKtosLbCNHa2YXUnm3WoZyg2uCaEJ4Zg8McTiczO/dJhwxkkEbSlV6kAaDzNN73CgWV2YA+MSH7jwq02U0+HnnhV+7E4YOuXMrdQfKnjYTORfIioWKrGMtWXOMf0Vtrf7K/DSMeO8DoGPO9ew/RhjcK+x4oFkV5sIZu+hDfpY1LkgkdDXmGPhCKFGuQWuBxrT/RPPs+HFY6fETx4YukMMSySZLqSST8lrQ01y25fBm6yntLk9Xy1xWoibb2QeGLw5/wC6T86Om0dntwxMDemLjb8aufLF+TMdUl4CZa7LXLiMMeEsbek6t+NEBQ8GVvRw1CsXsa4P0Cy0uWjBD6+ld3Z6fKl3ibWDOGUfa49F/OvG+0uCgkx+Jdg1zPKCRKV4EjgK9qlYfOvFdquDip/OeY/M1hT1Fk8bmdDRRXFvCKVNmYYMCLsRrvys1m61KOHj9fWnKDTteetMcmWlFIHFBHzX1NWeGig6Dp4Krw+vTztVhhWHp/qqO1vA+CWRMScs9hpdFtVrh5AV3tdOBqu2kp3Wt7NgetNwUx58jrrUM+UsE0OHyTsXI2UvlIjjF2yLmY/jUNu0+EOFJyFWGYJIymLd9DUGXtFLJI8UWXDpGcrSSHjUXGQgwlTMkiObjPGXdW9/LhRGvpSHOf8AHkpn2zG+JWRFLOkl1NuK8x51rcXKoTTczKrWO6y1kcJK2HYkCOUNwdbZxVhPji8eaxW63sfEKs2xcmsLgrVywpZfJEx892tx1rT9icOv1ed7Z+8xCg5o8yiyjr61iAxL69bXradhNuM2BxODRrXxcWI7s2ZQgIBIN762FwAeXWpr4tUPBVhP/b1k0L4aI6FEN+sS5vuof/D8L+yTX/pBqngA+WvC3CkCcdy+mnGsbdJcZZpbI+kQjsvB/skFzYfost6b/wANwQ4INOhK/jVgubmLaae1u04RueAzaX3QfDSq2a6kxrrh5SKwYDCE8GQ2uO7nkjt8676nD+0n/wA+351ZFGtop+HCn3HR/wCqnfNZ/Jjfhrf/ACjZ4hzXi2MJM0p43llJPsnU163tfHRxQySvosMbu3nYcB5mvC32hii18g3yxt3Z0vrWmq2+ijGaj2WQbX146U+61VDH4kDw3sbWynWm/XcVfwD1ynSnumY9XwLbS/XzqZh2H2efAVnhjsXpucf3DRIsfjhwQcf2RpkqJNDo6iCZqMYCYSbfqzm4+zzqsSXiBoW4E8qgT7cxiKVyIxy6oQdV5/KkgmzqrpqGCmoXS4rklV0ZPgsRs6BFzhQ5U5i2QMxag4rbGzCG/uiu+6FBiZlX86m4LGwCM5zoAxJ8XrWRx/aaZ2IhijgAawbu+8f4mnVQlJ9dBOyMF2O7sNNnMQjAN8zR92o9BXbRxACWve+l7+zVVPisQ7APIXLG5A3VFKZFF7gNdudW1U8rLKcrk84XY2Way6dLL51ediZxh9p4ME5e/mWKWwzMEYWtb3iqF8QSbKovysua1O2fiFjxUcj/AKQQyo8gB3msb1Olgrvk9625lRIzEzf4iFWuuXdOlvj91AAPUHNwseNY/B9ptkyNo6xFSrAYmJo1LeWpFXmG2qsn6qTDy34BGzNm9L1l62udk01HHBf0tkK4NOWeSzMZvYkeK5F/jUPaskgmk3pSGe8QjZliEVhbgfWo2L2ssf62WCEk+B75x7r3qEO0WCJ1mh6DNhpGqqtLa10N1M67UvuxgnbOnmM+UM7Bo2uJnPiHQnXpVndui1k8b2uhjNolTEW4ssZgT3G9zUT+3z/8qn+ZapVorfQtNsIRxuNx2vjGIw/1YyNB3waUyRx58qryOotf8K8jninHCUt53P516v2llkTZ+IkTdZIrIfDZiQPxryiGeYgXVWDBSDWisrorRSb5RBlnxSniTrxzGhfXcTfn/Uav8JgZ5myxR94QMxVRwXrR5+z20Fjd2w7KI0Z2YjgoFyeNPVjYrhHPZnPruIC5mzAZ7CxPitepOHxk7WtmAdb5mYquXh18quMFBsWfZy/WpJ8B/fXMZw2EGLZtwXvciwqmmFlypmtEWEPeeMoDzA4E3vanptoiaSeEdi5ZON763BP3VM7Ou7wSBfFBLfJ1Q629xBqvnYPDpzGo9oNU/sUjZ5zyyxA/xXJ/OobsbGyan80vYzbMyrCSpKmQsDH4bNzqisCFUm+QWF+S8fvrQ9sQDiIl0X9HmZgONyePwqgMa/bHwpaPwTEvb3tehYAO8+6lSMtw0F2LOfwpYxlubZ7K2tjSkOFGfcAGka7zs1S5Ihrsq7kQzFtC3tUB1s2Ub1vER9qj6oCx0ZxZVHsr+dTdl4Hd7xx4tVU8/M1PTVKx4iiK2agssXCbOc21yDiWPibTkKXEiBTaMXKnWUnezeVTcXMVTTi2g8lqqB3ifsi9WdRCFP2dy8sgpcrHubwvAeJhck7xJ1YnMxajBz6VGQECnxnWqW7C4LLSyElN7j921M7k9aI5APvUV12pu4MHrHbORRsqflfuh/qFeb4IDuUHRFPGtt2x2rh32e6AEZ5EGtuVz1rJ2w6RQlV7zvEVbBvbte/yNQ4bXBLGai+S47KY/C4fFO8xyB4silYzLvXB4e6rbtJ222acJLBDmxT4mKWIv3fdRRKRYk31J1OgrE4mLGsu6gjB9mM5m+JqqYSI5upYM1jfxL7qdCDXYTkm8of3jhQqhgFFhekgBuc2lzcE0/vxa/xI3locjKbEG/RlNOwNI+LEitdeBGtbz6O+ymLnwn1mJktiWKlXJXKym1wQDrrqOI0PA1h5ZBbXe01r0D6EGlebF4dcVJhN1Z0iADpJrYmx58PlUdqzBokrltkmVf0ldmcXg5MNLKRKmIR0Dx3VUcHgb87G/wAax4ToAvpave/pF2IZOz+LabEnEHCKuIjzKIlzg2t8CfjXgXegKOZItRT+CXoba8ybZxB4E8VYi/lTsVNGr34lwpBPJbUAyb4PGyvf4UbZuEMrmR/CmUDzPSrNVTskooinNRTbHYDBPI3eSeEG6g7ub/1VzYeltPSnA8hoBoBUPHz2GRePtt0Xp61uQhDS15fZlylO+eER8W4ZtNQugqInBvNlFHYG3oLUPDISvozE1iW2OUnL2aUIqKSDTrZBypcKLnp1NuFOxRBVbdOFdhAN4+VReB4k62dR1a5Puo9m6mgOd5eoOg60Tu5ftUmUIap5EYWMKHW+spanLKALLBCthoMuW3oailmqv2ntBo8qJ45Ndd7Kg5+tPSwNy2TNobSihFu6jd2FwgLNbzOtZjEzyOxdjcsb6btvSukdmYsxzFjcsfEaQjSl4HIHmuLG/C2YeIfnQTI8baa3Gv2WX86KVINIwU2DDMLX/eHpSNioJGEkRiNQzbw9oeVWfZza02A2hDjIxn+rtaSK9llw5FmHw4eYFVAUqbocmYqBYZl9CKkudN7Xqyby/CmNC9cnrP0u9qojsCCKBg67aKSxyKfHghrr0N8oI8jXiqKxF+GnFt2j4uWRjGhYusCMI1Zu8RFJJsBy1JNupp8EDFh7bNoL0Vwx9qCUl2+huEwTSN5X3jbLZa0EaKqhVGULoAK7DYYImUak6u3VqMbAEndCi5J5V0Ok0yqhmX5GNqL3ZLC6I2MlWOO54nRR1NVUJLNrve0SebdaTFYsSylgMqA2jUnNoOfvNGwgsD6Vma3UfLPC6Rf01OyPPYyW9+XlpTsIOI4a6U2Q0kTC/TXiapeC0FtuN5ZtabCQE6XHCiPlEdr5sxuxHzqPBdr+raD7qRAIHOcHhk1+dSe9FQ7EFvRT867vDRgQ9DOzIApZpsoUMxPd+yNTWAmmMk0kh9prLfknIV6Btf8AwWI/ktXnaeFv4mqZjIi3p4GlDNEi4e6mscjgAaY6afKirSScKZ5FGRg+lMM2ViOguAPCaKlRMV4h6r94o8ioeF3y3DWwsKv9nYTKuZtCw0B5L0qow361f5i/hWn5N/vnWl9OrUpbn2Z+vscY4QgUWql2/iDl7pTlzFe8sd4r0q7jrLbV/wAQf5tXtdY4VtIp6CClZyDjA5cBwFToxZLnmOtQYKlyeEelc+/BtoFI6jn/AOVDSdAevKxG6a5+HuqKvGjApMlfd00ueA3mNEwQ4eZpi/q/6/womD5UPoBk673rmWodzU3E8D/vnUSkQh//2Q==',
              },
              {
                name: 'Sofia Rodriguez',
                role: 'Tech Lead',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}