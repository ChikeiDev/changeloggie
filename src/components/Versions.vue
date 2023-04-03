<template>
  <div v-if="versions">
    <section class="py-6 px-3 text-left day">
      <div v-for="version in versions" :key="version.id">
        <header class="d-flex flex-items-center timeline">
          <span class="badge d-inline-block bg-info p-1 rounded-1 mr-2 text-bold text-white mt-2 date-badge">{{version.VersionId}}</span>
          <h2 class="">{{version.VersionDate}}</h2>
        </header>
        <ul class="list-style-none change-log border-test">
          <li v-for="changes in version.VersionChanges" class="d-flex flex-items-start mb-1 fix-res">
            <div v-bind:class="changes.ChangeTag" class="badge type-badge mt-1 mr-3 text-white text-uppercase">{{ changes.ChangeTag }}</div>
            <div class="change-description">{{ changes.ChangeDesc }}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Loading changelog history....</p>
    <p>if nothing happens, contact <a rel="noopener noreferrer" href="#" @click="copyText(text)">Simen#8900</a> @ discord</p>
  </div>
</template>

<script>

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

export default {
  data() {
    return {
      versions: null,
      text: 'Simen#8900'
    }
  },
  mounted() {
        fetch('https://changelogapp.azurewebsites.net/Versions')
        .then(res => res.json())
        .then(data => this.versions = data)
        .catch(err => console.log(err.message))
  },
  methods: {
    async copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        alert('Copied');
      } catch($e) {
        alert('Cannot copy');
      }
    }
  }
}


</script>

<style scoped>
.change-description {
  color: var(--coolest_blue);
  font-size: 13px;
  margin-top: 1px;
}

.change-log {
  padding-top: 10px;
  padding-bottom: 30px;

}
.border-test {
  border-left: 1px solid #29334b;
}

.fix-res {
  padding-left: 15px;
}

h2 {
  font-size: 1.5rem;
  color: var(--cooler_blue);
  font-weight: 200 !important;
}

.text-uppercase {
  text-transform: uppercase;
}

.feature {
  color: #fff;
  background-color: #28a745
}

.upgrade {
  color: #fff;
  background-color: #ff974c
}

.fix {
  color: #fff;
  background-color: #10a1ef
}

.change {
  color: #fff;
  background-color: #9a9a9a
}

.remove {
  color: #fff;
  background-color: #343434
}

.type-badge {
  flex: 0 0 65px;
  font-size: 10px;
  font-weight: 600;
}
.date-badge {
  width: 95px;
  font-size: 1.2em;
  font-weight: 600;
}

#changelog {
  color: rgba(255,255,255,0.65);
}
* {
  z-index: 1;
}
.timeline::before {
  content: "";
  background-color: rgb(154, 154, 154);;
  width: 3px;
  position: absolute;
  top: 10rem;
  bottom: 0;
  left: calc((65px / 2) + 16px);
  z-index: 0;
}
.timeline {
  margin-left: -13px;
}
.active {
  text-decoration: underline;
}
h1, h2 {
  font-weight: 100;
}

</style>