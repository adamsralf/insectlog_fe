<template>
  <div>
    <ProjectHero :content="project.hero" v-if="project.hero"></ProjectHero>
    <ProjectStatistics :content="project.statistics" v-if="project.statistics"></ProjectStatistics>
    <ProjectFeatures :content="project.features" v-if="project.features"></ProjectFeatures>
    <ProjectTeam :content="project.team" v-if="project.team"></ProjectTeam>
  </div>
</template>

<script>
import ProjectHero from "@/components/Homepage/Project/hero";
import ProjectFeatures from "@/components/Homepage/Project/features";
export default {
  name: "project",
  components: { ProjectHero, ProjectFeatures },
  data() {
    return {
      project: {
        hero: null,
        statistics: null,
        team: null,
        features: null
      }
    }
  },
  async fetch() {
    let content = await this.$content(this.$i18n.locale, 'project').fetch()
    this.project.hero = content.hero
    this.project.statistics = content.statistics
    this.project.team = content.team
    this.project.features = content.features
  },
}
</script>

